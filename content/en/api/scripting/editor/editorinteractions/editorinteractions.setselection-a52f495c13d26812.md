---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a52f495c13d26812b563cc77121c48b217dea5da28a97d42c344732ee85b2367
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.SetSelection(System.Collections.Generic.IEnumerable{InnoEngine.Core.IdentityObject},InnoEngine.Core.IdentityObject)
title: EditorInteractions.SetSelection
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 6cc46427dcea25f711ad15239a29e7024ad4e970a90227b8fdbca6db999af6c5
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targets`:** Registered objects resolved for the current callback.

**Parameter `anchor`:** The range anchor, or null to use the first selected target.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The target collection or one member is null.

**Exception `T:System.InvalidOperationException`:** A target has no live identity registration.
