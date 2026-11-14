---
uid: api.a4f34328de12253f9f8b72966dfdcfd876eb24f8a2c7e5459f8c5644830915ad
symbol: "scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetCreationMenuAttribute.#ctor(System.String,System.String,System.String,System.String,System.Int32,System.Int32,System.Boolean)"
source: xml
reviewed: 634cb2bf3c8e811abdb5aaecfc93592c57b5cb419b31739fb64f721971cc2de2
title: "AssetCreationMenuAttribute.Constructor"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: editor-script
apiScope: Editor
---

Creates one asset creation menu declaration.

## Parameters

**Parameter `id`:** Globally stable template identifier.

**Parameter `menuPath`:** Slash-delimited path below the File Browser Create menu.

**Parameter `extension`:** Native source extension, including its leading dot.

**Parameter `defaultName`:** Default source name without an extension or numeric suffix.

**Parameter `groupOrder`:** Stable order of the top-level category below Create.

**Parameter `itemOrder`:** Stable order of the leaf within its immediate category.

**Parameter `separatorBeforeGroup`:** Whether the top-level category starts after a separator.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when an identifier, path, source name, or native extension is invalid.
