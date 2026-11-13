---
title: Author an RmlUi document
description: Import RML with controlled RCSS dependencies, declared font assets,
  and an explicit runtime backend.
uid: manual.ui.author-rml
kind: how-to
owners:
  - Inno.Adapter.UI.RmlUi.Authoring
  - Inno.UI.Assets
contracts:
  - project.inno-adapter-ui-rmlui-authoring#source-analysis-contract
  - project.inno-ui-assets#import-and-generation-contract
---
# Author an RmlUi document

RML and RCSS are the document and stylesheet languages of the RmlUi backend. InnoEngine imports them into a neutral UI asset with an explicit language and implementation identity. This is a retained UI document pipeline, not a web browser or an HTML/JavaScript runtime.

## Select the correct importer

| Source | Import owner | Selection |
| --- | --- | --- |
| `.rml` | RmlUi authoring adapter | RML language and RmlUi implementation are selected by the importer. |
| `.iuidocument` | Neutral UI asset importer | Set `languageId` and `implementationId` explicitly in its import settings. |

The product's authoring composition must make the importer and frontend available. The runtime product must supply a compatible backend separately. Successful authoring analysis does not prove that the native library is deployed or that a renderer is present.

## Start with a document and a font

The following source assumes a compatible font asset at `fonts/Interface.ttf`, relative to the document's asset source path. Choose an actual font you are authorized to distribute. Importing will fail if its dependency cannot resolve or has no usable face.

```xml
<rml>
<head>
    <title>Status</title>
    <style>
        @font-face {
            font-family: Interface;
            src: url(fonts/Interface.ttf);
            font-weight: normal;
        }
        body { font-family: Interface; font-size: 18px; }
    </style>
</head>
<body>
    <p id="status">Ready</p>
</body>
</rml>
```

After import, [load the resulting asset](use-documents.md) through the UI service and update `status` with plain text. The runtime acquires the declared font artifact and keeps the necessary registration alive while documents reference it.

## Share stylesheets through declared dependencies

The frontend expands linked `.rcss` sheets and recursive `@import` directives using the import context's source reader. Relative paths resolve from the file that contains the reference. Cycles fail explicitly. Rooted paths and paths escaping the selected asset root are rejected.

An explicitly qualified asset path remains subject to the asset system's source and dependency rules. The reader is not an unrestricted filesystem or network loader. Keep stylesheets in declared source mounts and make dependency changes visible to the importer.

## Keep font families private to the document

The frontend extracts `@font-face` declarations, resolves their source assets and rewrites family names into private identities. It removes the source face declarations from the canonical runtime text. The runtime adds content-version isolation, and the RmlUi adapter maps those families into native registration names.

Current font registration selects face zero. The RmlUi backend reports that arbitrary collection-face selection is unavailable. Weight accepts `normal`, `bold`, or an integer from 100 through 1000. Use supported style declarations and verify the actual font; a family name is not proof that a requested face exists.

## Size a document to its context

For the current RmlUi integration, a document root whose width or height remains `auto` receives the corresponding full-context extent. Explicit authored dimensions are preserved. Viewport changes then relayout the document through its context. Percentage and edge positioning refer to that layout box, not a zero-sized automatic root.

Positioning an element at 50% places its origin there. If the element itself should be centered, account for its own dimensions, for example with a supported translate transform. Check the selected RCSS subset rather than assuming complete browser CSS behavior.

## Understand analysis limits

The current frontend performs controlled dependency expansion, font extraction and source preflight. Its root check is not a complete RML grammar validator. Native document loading remains a distinct failure boundary. Do not treat a successful import as proof that every upstream RmlUi feature is exposed by InnoEngine.

The [upstream RmlUi documentation](https://mikke89.github.io/RmlUiDoc/) explains the languages. It tracks upstream development; InnoEngine's pinned backend and exposed contracts determine what a selected product actually supports.

## Continue

- [RmlUi backend boundaries](../../backends/rmlui.md).
- [Import and frontend reference](../../architecture/projects/inno-ui-assets.md).
