import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { WikiSearchService } from '../wiki-search.service'

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css'],
  providers: [WikiSearchService]
})
export class WikiSearchComponent implements OnInit {
  items: Observable<string[]>;

  constructor(private _wiki: WikiSearchService) { }

  private searchTermStream = new Subject<string>();
  search(term: string) { this.searchTermStream.next(term); }

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((term: string) => this._wiki.search(term));
  }

}
