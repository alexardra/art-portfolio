const instances = new Map();

function onClickOutside(event, el, handler) {
  const isClickOutside = event.target !== el && !el.contains(event.target);

  return isClickOutside ? handler(event, el) : null;
}

function toggleEventListeners(action, eventHandler) {
  document[`${action}EventListener`]("click", eventHandler, true);
}

function bind(el, { value: handler }) {
  const eventHandler = (event) => onClickOutside({ el, event, handler });

  toggleEventListeners("add", eventHandler);

  instances.set(el, eventHandler);
}

function unbind(el) {
  const eventHandler = instances.get(el);

  toggleEventListeners("remove", eventHandler);

  instances.delete(el);
}

const directive = {
  bind,
  unbind,
};

export default directive;
