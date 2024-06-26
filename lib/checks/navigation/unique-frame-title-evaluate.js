import { sanitize } from '../../commons/text';

function uniqueFrameTitleEvaluate(node, options, vNode) {
  const title = sanitize(vNode.attr('title')).toLowerCase();
  this.data(title);
  return true;
}

export default uniqueFrameTitleEvaluate;
