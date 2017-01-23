import { MJMLElement } from 'mjml-core'
import React, { Component } from 'react'
import reverse from 'lodash/reverse'
import MJMLText from 'mjml-text'
// Tag Name
const tagName = 'mj-for'
// List of parent tags
var parentTag = ['mj-body', 'mj-container', 'mj-section', 'mj-column'];
// If false, the component can contain MJML; if true, it can contain only plain HTML
const endingTag = false

const defaultMJMLDefinition = {
  attributes: {
    'each': [],
    'iterator': ''
  }
}

@MJMLElement
class MjFor extends Component {
  render () {
    const { mjAttribute, mjContent } = this.props;
    const eachStr = mjAttribute('each');
    const iterate = mjAttribute('iterator');
    const eachArr = eachStr.split(',');
    console.log(this.props.children.find((x) => { return x.type="mj-text"}));
    return <div>{this.prop.children}</div>
  }

}

MjFor.tagName = tagName
MjFor.parentTag = parentTag
MjFor.endingTag = endingTag
MjFor.defaultMJMLDefinition = defaultMJMLDefinition

export default MjFor