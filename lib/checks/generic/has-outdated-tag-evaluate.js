function hasOutdatedTag(node, options, virtualNode) {
  const { nodeName } = virtualNode.props;
  if (
    nodeName === 'font' ||
    nodeName === 'center' ||
    nodeName === 'basefont' ||
    nodeName === 'strike' ||
    nodeName === 'u'
  ) {
    this.data({ nodeName });
    return false;
  }
  return true;
}

export default hasOutdatedTag;
