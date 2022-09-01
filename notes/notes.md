# Notes

## Day 0

### Hooks

- As `ngOnChanges()` can be called before `ngOnInit()`, create an `init()` method, which sets an `isInitialised` boolean flag to true once run (so we only run it once) and call it in both hooks.

### Content Projection

- Use `@ContentChildren()` when wanting to get `ng-content`
- Use `@ViewChildren()` when wanting to get an explicit child element.

### Change Detection

- Should be using `onPush`. No reason not to.
- Avoid manually triggering change detection (then really does force you to have dumb components as they will only updated on events or input changes).
- Interesting to see that the `onPush` component is destroyed and recreated on each change (`ngOnDestroy()` and `ngOnInit()` are both called when an `@Input()` changes).
- Hot observables (use `.pipe(publish())` in RxJS). `.pipe(share())`, gets the data upon the first subscription.
  - Cold - Like watching YouTube (point-to-point, lazy: only starts at subscription)
  - Hot - Like watching live TV (multicast, starts without you (on the first subscription with `share()` however))

## Day 1

### Directives

- If you name an `@Input()` or `@Output()` parameter as the same name as the directive, then you do not need to specify the directive on the element:

```
  @Directive({
  selector: '[appClickWithWarning]'
  ...

  @Output() appClickWithWarning = new EventEmitter();
})
```

```html
  <button (appClickWithWarning)="onOutput()">...</button>
```

## Day 2

### Webpack build analyzer

```bash
  ng b --stats-json

  npm i -g webpack-bundle-analyzer

  // cd ... to build

  webpack-bundle-analyzer stats.json
```

