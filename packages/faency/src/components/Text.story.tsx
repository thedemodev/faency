import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from './Box'
import { Text } from './Text'

storiesOf('Components|Text', module).add('default', () => (
  <>
    <Box mb="4">
      <Text as="p">Default text</Text>
    </Box>

    <Box mb="4">
      <Text as="p" size={0}>
        Containous
      </Text>
      <Text as="p" size={1}>
        Containous
      </Text>
      <Text as="p" size={2}>
        Containous
      </Text>
      <Text as="p" size={3}>
        Containous
      </Text>
      <Text as="p" size={4}>
        Containous
      </Text>
      <Text as="p" size={5}>
        Containous
      </Text>
      <Text as="p" size={6}>
        Containous
      </Text>
      <Text as="p" size={7}>
        Containous
      </Text>
      <Text as="p" size={8}>
        Containous
      </Text>
    </Box>

    <Box mb="4">
      <Text as="p" sx={{ fontStyle: 'italic' }}>
        Enabling the Cloud.
      </Text>
      <Text as="p" sx={{ fontWeight: 500 }}>
        Enabling the Cloud.
      </Text>
    </Box>

    <Box mb="4">
      <Text as="p">We are Containous</Text>
      <Text as="p" sx={{ color: 'blue' }}>
        We are Containous
      </Text>
      <Text as="p" sx={{ color: 'red' }}>
        We are Containous
      </Text>
      <Text as="p" sx={{ color: 'green' }}>
        We are Containous
      </Text>
      <Text as="p" sx={{ color: 'gray' }}>
        We are Containous
      </Text>
    </Box>

    <Box mb="4">
      <Text as="p" sx={{ textAlign: 'center' }} padding="4">
        We are Containous. We strive to provide the cloud with the most powerful tools to ease the demanding
        infrastructures strain on your IT.
      </Text>
    </Box>
    <Box mb="4" sx={{ width: 200 }}>
      <Text as="p" sx={{ textAlign: 'center' }} padding="4" truncate>
        We are Containous. We strive to provide the cloud with the most powerful tools to ease the demanding
        infrastructures strain on your IT.
      </Text>
    </Box>

    <Box mb="4">
      <Text size={5}>
        We are Containous. We strive to provide the cloud with the most powerful tools to ease the demanding
        infrastructures strain on your IT.
      </Text>
    </Box>
  </>
))
