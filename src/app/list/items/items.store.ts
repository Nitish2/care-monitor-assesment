// src/app/list/items.store.ts
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signalStore, withState, withMethods, patchState, withHooks } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError } from 'rxjs';
import { of } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  description: string;
}

interface ItemsState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

export const ItemsStore = signalStore(
  { providedIn: 'root' },
  withState<ItemsState>({ items: [], loading: false, error: null }),

  withMethods((store) => {
    const http = inject(HttpClient);

    return {
      loadItems: rxMethod<void>(
        pipe(
          tap(() => patchState(store, { loading: true, error: null })),
          switchMap(() =>
            http.get<Item[]>('/api/items').pipe(
              tap((items) => patchState(store, { items, loading: false })),
              catchError((err) => {
                patchState(store, {
                  loading: false,
                  error: 'Failed to load items. Please try again.'
                });
                return of([]);
              })
            )
          )
        )
      )
    };
  }),

  withHooks({
    onInit(store) {
      store.loadItems();
    }
  })
);