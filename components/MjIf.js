import { MJMLElement } from 'mjml-core'
import React, { Component } from 'react'
import reverse from 'lodash/reverse'
import Section from 'mjml-section'
import Column from 'mjml-column'
import Image from 'mjml-image'
import Text from 'mjml-text'

// Tag Name
const tagName = 'mj-if'
// List of parent tags
var parentTag = ['mj-body', 'mj-container', 'mj-section', 'mj-column'];
// If false, the component can contain MJML; if true, it can contain only plain HTML
const endingTag = false

const defaultMJMLDefinition = {
  attributes: {
    'condition': ''
  }
}

@MJMLElement
class MjIf extends Component {
  render () {
    // const { mjAttribute } = this.props;
    // const condition = mjAttribute('condition');
    const { mjAttribute } = this.props;
    const condition = mjAttribute('condition');
    console.log(condition);
    const parsed = JSON.parse(condition);
    console.log(parsed);

    console.log(this.props.children);
    return (
        <div>
            { parsed.name ? this.props.children : null}
        </div>
    )

  }

}

MjIf.tagName = tagName
MjIf.parentTag = parentTag
MjIf.endingTag = endingTag
MjIf.defaultMJMLDefinition = defaultMJMLDefinition

export default MjIf