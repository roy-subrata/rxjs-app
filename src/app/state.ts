
import { Injectable } from "@angular/core";
import { createStore, select, setProps, withProps } from "@ngneat/elf";

interface Filter {
    filterCriteria: Map<string, string[]>
}

const filterStore = createStore(
    { name: 'filter' },
    withProps<Filter>({ filterCriteria: new Map<string, string[]>() })
)

@Injectable({
    providedIn: 'root'
})
export class FilterRepo {

    filter$ = filterStore
        .pipe(select(state => state.filterCriteria));

    load(filterCriteria: Map<string, string[]>) {
        filterStore.update(setProps({ filterCriteria: filterCriteria }));
    }
}

function setEntities(arg0: never[]): import("@ngneat/elf").Reducer<Filter> {
    throw new Error("Function not implemented.");
}
