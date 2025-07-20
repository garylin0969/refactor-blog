import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        category: { type: 'string', required: true },
        title: { type: 'string', required: true },
        description: { type: 'string', required: false },
        date: { type: 'date', required: true },
        coverImage: { type: 'string', required: false },
        tags: { type: 'list', required: false, of: { type: 'string' } },
        lastUpdate: { type: 'date', required: false },
        draft: { type: 'boolean', required: false },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/${post._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: './_posts',
    documentTypes: [Post],
});
