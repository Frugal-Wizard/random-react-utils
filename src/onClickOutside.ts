import abortable from './abortable';

export default function onClickOutside(node: Node, callback: () => void): () => void {
  return abortable(signal => {
    document.addEventListener('click', ({ target }) => {
      if (!node.contains(target as Node)) {
        callback();
      }
    }, { signal, capture: true });
  });
}
