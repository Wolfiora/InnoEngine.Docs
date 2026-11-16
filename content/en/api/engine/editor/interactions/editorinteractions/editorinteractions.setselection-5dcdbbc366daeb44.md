---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5dcdbbc366daeb441a0ea99c65944a93b4f4d1c6ed315b8d14ddeadcb254ab9a
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.SetSelection(System.Collections.Generic.IEnumerable{Inno.Core.Identity.IdentityObject},Inno.Core.Identity.IdentityObject)
title: EditorInteractions.SetSelection
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 139c30334d7ac7264579312219c1a38f73b6aa2af2a0d93241f6534b72612552
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
