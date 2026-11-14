---
uid: api.5dcdbbc366daeb441a0ea99c65944a93b4f4d1c6ed315b8d14ddeadcb254ab9a
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.SetSelection(System.Collections.Generic.IEnumerable{Inno.Core.Identity.IdentityObject},Inno.Core.Identity.IdentityObject)"
source: xml
reviewed: 941e031b1591ec5653a2c04fb74d9f8ec978fdbedf03f36299f03ffed90b7ae8
title: "EditorInteractions.SetSelection"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Replaces the ordered selection; duplicates are removed and the final target becomes primary.

**Parameter `targets`:** Registered objects resolved for the current callback.

**Parameter `anchor`:** The range anchor, or null to use the first selected target.

**Exception `T:System.ArgumentNullException`:** The target collection or one member is null.

**Exception `T:System.InvalidOperationException`:** A target has no live identity registration.
