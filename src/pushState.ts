export default function pushState({
  state,
  url,
}: {
  state?: unknown;
  url?: URL | string;
}) {
  window.history.pushState(state, '', url);
  window.dispatchEvent(new PopStateEvent('popstate', { state }));
}
