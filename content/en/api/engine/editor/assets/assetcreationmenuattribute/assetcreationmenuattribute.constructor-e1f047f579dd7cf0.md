---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e1f047f579dd7cf01e1e12ca0ace29f67b431ade0a7e6e3ff33e4638c75c013f
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetCreationMenuAttribute.#ctor(System.String,System.String,System.String,System.String,System.Int32,System.Int32,System.Boolean)
title: AssetCreationMenuAttribute.Constructor
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
sourceFingerprint: 716cfbb98b6ec4c32386f3d6bc592d75694530504015d212ce6b81aca38ddad1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
