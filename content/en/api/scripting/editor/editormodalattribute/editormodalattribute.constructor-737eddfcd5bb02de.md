---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.737eddfcd5bb02dedfb5b5fa50f8f8b0334d4eef5ce2f39614583359d6ec424b
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModalAttribute.#ctor(System.String,System.String,System.Int32)
title: EditorModalAttribute.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 77cbb462676815be9a211ad1621b4e932b97566dcf24f447e9038f366254f741
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable identity used to retain modal transition state across refreshes.

**Parameter `title`:** The visible title rendered by the modal host.

**Parameter `order`:** The stable ordering value when multiple modals are visible.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` or `title` is empty.
