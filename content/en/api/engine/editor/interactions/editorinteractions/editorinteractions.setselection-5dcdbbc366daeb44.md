---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5dcdbbc366daeb441a0ea99c65944a93b4f4d1c6ed315b8d14ddeadcb254ab9a
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.SetSelection(System.Collections.Generic.IEnumerable{Inno.Core.Identity.IdentityObject},Inno.Core.Identity.IdentityObject)
title: EditorInteractions.SetSelection
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: b5bce85887e48a9871dfd66fed1fb7e2a13fbf4e2d90eec114fc83ee901a5e95
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
