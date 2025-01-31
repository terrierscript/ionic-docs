---
previousText: 'Lifecycle'
previousUrl: '/docs/react/lifecycle'
nextText: 'Config'
nextUrl: '/docs/react/config'
---

# Reactナビゲーション

このガイドでは、IonicとReactで構築されたアプリでのルーティングの仕組みについて説明します。

`IonReactRouter` は一般的な [React Router](https://github.com/ReactTraining/react-router) ライブラリを内部で使用しています。Ionic と React Router を使うことで、ページ遷移がリッチなマルチページアプリをつくることができます。

React Routerを使用したルーティングについて知っていることはすべて、Ionic Reactで利用することができます。Ionic Reactアプリの基本と、ルーティングがどのように機能するかを見てみましょう。

## Ionic Reactにおけるルーティング

これは `App` コンポーネントのサンプルで、 "/dashboard" URLへの単一ルートを定義しています。"/dashboard"にアクセスすると、 `DashboardPage` コンポーネントをレンダリングします。

**App.tsx**

```typescript
const App: React.FC = () =>
  (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/dashboard" component={DashboardPage} />
          <Redirect exact from="/" to="/dashboard" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
```

`Route` の直後に、デフォルトの `Redirect` を定義します。これは、ユーザーがアプリのルートURL（"/"）にアクセスすると、"/dashboard" URLにリダイレクトします。

リダイレクトには `exact` という prop もあります。つまり、このルートが一致するためには、URLが `from` prop（もしくは `Route` で `exact` が使われている場合の `path` prop）と正確に一致する必要があります。すべてのルートは"/"で始まるため、これがないと、このリダイレクトはすべてのルートに対してレンダリングされます。

ユーザーが認証されているかどうかを確認するなど、条件に基づいてルートのrenderメソッドからプログラムでリダイレクトすることもできます:

```typescript
<Route
  exact
  path="/dashboard"
  render={props => {
    return isAuthed ? <DashboardPage {...props} /> : <LoginPage />;
  }}
/>
```

## IonReactRouter

`IonReactRouter` コンポーネントは、React Routerの従来の [`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter) コンポーネントをラップし、アプリケーションをルーティング用にセットアップします。したがって、 `BrowserRouter` の代わりに `IonReactRouter` を使用します。任意のpropを `IonReactRouter` に渡すことができ、それらはベースとなる `BrowserRouter` に渡されます。

## ルーターのネスト

DashboardPage 内で、アプリのこの特定のセクションに関連するルートをさらに定義します。

**DashboardPage.tsx**

```typescript
const DashboardPage: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/dashboard" component={UsersListPage} />
      <Route path="/dashboard/users/:id" component={UserDetailPage} />
    </IonRouterOutlet>
  );
};
```

ここでは、アプリの DashboardPage から更にコンポーネントが定義された2つのルートがあります。pathにはルートの全体を定義する必要があり、そのURLからこのページに到達した場合でも、 "/dashboard" を省略できないことに注意してください。 React Routerは絶対パスを必要とし、相対パスはサポートされていません。

ただし、 [`match`](https://reacttraining.com/react-router/web/api/match) オブジェクトの `url` プロパティを使用して、コンポーネントをレンダリングするために match したURLを提供できます。これは、ネストされたルートを操作するときに役立ちます。

```typescript
const DashboardPage: React.FC<RouteComponentProps> = ({match}) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={UsersListPage} />
      <Route path={`${match.url}/users/:id`} component={UserDetailPage} />
    </IonRouterOutlet>
  );
};
```

ここでは、 `match.url` には "/dashboard" の値が含まれています。これは、 `DashboardPage` のレンダリングに使用されるURLであるためです。

これらのルートは `IonRouterOutlet` にグループ化されています。次に説明します。

## IonRouterOutlet

`IonRouterOutlet` コンポーネントは、Ionicの "ページ" をレンダリングするルートコンテナを提供します。 ページが `IonRouterOutlet` にある場合、コンテナはページ間の遷移アニメーションを制御し、ページが作成および破棄されるタイミングを制御します。これにより、ビューを切り替える際にビュー間の状態を維持できます。

上記の `DashboardPage` には、ユーザーリストページと詳細ページが表示されます。 2つのページ間を移動するとき、 `IonRouterOutlet` は適切なプラットフォームページの遷移を提供し、前のページの状態をそのまま保持するため、ユーザーがリストページに戻ると、前のページと同じ状態で表示されます。

`IonRouterOutlet` には、 `Route` と `Redirect` のみを含める必要があります。 他のコンポーネントは、 `Route` の結果、または `IonRouterOutlet` の外部でレンダリングする必要があります。

`IonRouterOutlet` は別の `IonRouterOutlet` の子孫であってはいけません。

## Navigation

Ionic Reactアプリでさまざまなビューにルーティングする場合、いくつかのオプションを使用できます。 ここで、 `UsersListPageはIonItem` は `IonItem` の `href` prop を使用して、タップ/クリックされたときに移動するルートを指定します:

**UsersListPage.tsx**

```typescript
const UsersListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem href="/dashboard/users/1">
            <IonLabel>User 1</IonLabel>
          </IonItem>
          <IonItem href="/dashboard/users/2">
            <IonLabel>User 2</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

`IonItem` の外部では、React Router [`Link`](https://reacttraining.com/react-router/web/api/Link) コンポーネントを使用してビュー間を移動することもできます:

```html
<Link to="/dashboard/users/1">User 1</Link>
```

ルーティングは可能な限り、上記の方法のいずれかを使用することをお勧めします。 これらのアプローチの利点は、両方ともアンカー（ `<a>` ）タグをレンダリングすることです。これはアプリ全体のアクセシビリティに適しています。

ナビゲーションのためのプログラムオプションとして、React Routerがルート経由でレンダリングするコンポーネントに提供する [`history`](https://reacttraining.com/react-router/web/api/history) prop を使用することもできます。

```typescript
<IonButton
  onClick={e => {
    e.preventDefault();
    history.push('/dashboard/users/1');
  }}>
  Go to User 1
</IonButton>
```
> Note: `history` は prop.


## URLパラメーター

Dashboard Pageで定義された2番目のルートには、URLパラメーターが定義されています（パスの ":id" 部分）。 URLパラメーターは `path` の動的な部分であり、ユーザーが "/dashboard/users/1" などのURLに移動すると、"1" はルートがレンダリングするコンポーネント上で "id" という名前のパラメーターに保存されます。それがどのように行われるかを見てみましょう。

**UserDetailPage.tsx**

```typescript
interface UserDetailPageProps extends RouteComponentProps<{
  id: string;
}> {}

const UserDetailPage: React.FC<UserDetailPageProps> = ({match}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        User {match.params.id}
      </IonContent>
    </IonPage>
  );
};
```

[`match`](https://reacttraining.com/react-router/web/api/match) prop には、URLパラメーターなど、一致したルートに関する情報が含まれます。 ここで `id` パラメータを取得し、画面に表示します。

> Note: TypeScriptインターフェイスを使用して props オブジェクトを厳密に入力する方法に注意してください。 このインターフェースにより、コンポーネント内部でタイプセーフティとコード補完が可能になります。

### IonRouterOutlet in a Tabs View

Tabビューで作業する場合、Ionic Reactには、どのビューがどのTabに属しているかを判断する方法が必要です。これは、 `Route` に提供されるパスが正規表現であるという事実を利用することにより実現します。

この構文は少し不思議に見えますが、理解すればかなり簡単です。

例えば、2つのタブ (sessions と speakers) をもつビューのルートは次のように設定できます:

```typescript
<IonRouterOutlet>
  <Route path="/:tab(sessions)" component={SessionsPage} exact={true} />
  <Route path="/:tab(sessions)/:id" component={SessionDetail} />
  <Route path="/:tab(speakers)" component={SpeakerList} exact={true} />
</IonRouterOutlet>
```

ナビゲートされたURLが "/sessions" の場合、最初のルートと一致します。 "tab" というURLパラメーターに "sessions" の値を格納して、 `match` オブジェクトに `SessionsPage` として追加します。

ユーザーがセッションの詳細ページ（たとえば "/sessions/1" ）に移動すると、2番目のルートは "tabs" というURLパラメーターに "sessions" という値を追加します。 `IonRouterOutlet` は、両方のページが同じ "sessions" タブにあることを認識すると、新しいビューへのアニメーションページ遷移を提供します。 ユーザーが新しいタブ（この場合は "speakers" ）に移動すると、 `IonRouterOutlet` はアニメーションを提供しないことを認識します。

### IonRouterOutletの `Switch`

`IonRouterOutlet` がどのルートをレンダリングするかを決定するジョブを引き継ぐため、IonRouterOutlet内で使用する場合、React Routerからの `Switch` を使用しても効果はありません。 `IonRouterOutlet` の外部で使用する場合、 `Switch` は引き続き期待どおりに機能します。

## 更に知りたい場合

React Routerを使用したReactでのルーティングの詳細については、次の [https://reacttraining.com/react-router/web](https://reacttraining.com/react-router/web) でドキュメントをご覧ください。


## From the Community

[Ionic 4 and React: Navigation](https://alligator.io/ionic/ionic-4-react-navigation) - Paul Halliday

