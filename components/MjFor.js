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
    'each': [],
    'iterator': ''
  }
}

@MJMLElement
class MjFor extends Component {
  render () {
    const { mjAttribute } = this.props;
    const eachArr = JSON.parse(mjAttribute('each'));

    console.log(this.props.children);
    return (
        <div>
            { 
                eachArr.map(x => {
                    this.props.children;
                });
        }
        </div>
    )

  }

}

MjFor.tagName = tagName
MjFor.parentTag = parentTag
MjFor.endingTag = endingTag
MjFor.defaultMJMLDefinition = defaultMJMLDefinition

export default MjFor