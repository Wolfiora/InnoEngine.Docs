---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.91daa0ab74ce0bd96e670b8be90a37a98746f85ffec941eed257bf0a95af079a
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorActionAttribute.#ctor(System.String,System.Int32)
title: EditorActionAttribute.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: eed31edc81ab61dd4569aaa2233d31553300f38f447ba87a5858418fd0fc27ab
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `action`:** The stable semantic action name.

**Parameter `priority`:** The tie-breaking priority used after target specificity.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
