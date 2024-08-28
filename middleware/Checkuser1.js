export default function ({ store, redirect, app }) {
  if (!store.state.phone) {
    return redirect("/Login");
  }
}
