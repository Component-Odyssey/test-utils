function getAncestors(element) {
  let ancestors = [];

  function findAncestors(el) {
    const parent = el.parentNode;

    if (el.assignedSlot) {
      ancestors.push(el.assignedSlot);
      return findAncestors(el.assignedSlot);
    } else if (parent instanceof ShadowRoot) {
      ancestors.push(parent.host);
      findAncestors(parent.host);
    } else if (parent) {
      ancestors.push(parent);
      findAncestors(parent);
    }
  }

  findAncestors(element);

  return ancestors;
}

export {
  getAncestors
}