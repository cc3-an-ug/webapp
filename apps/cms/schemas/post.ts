import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Lab', value: 'lab' },
          { title: 'Project', value: 'project' },
          { title: 'Tutorial', value: 'tutorial' },
        ],
      },
    }),
    defineField({
      name: 'visible',
      type: 'boolean',
      title: 'Visible',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
