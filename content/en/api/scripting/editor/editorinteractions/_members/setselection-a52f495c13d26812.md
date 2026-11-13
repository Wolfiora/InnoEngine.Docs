---
uid: api.a52f495c13d26812b563cc77121c48b217dea5da28a97d42c344732ee85b2367
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.SetSelection(System.Collections.Generic.IEnumerable{InnoEngine.Core.IdentityObject},InnoEngine.Core.IdentityObject)"
source: xml
reviewed: f416eb8c1c1776c29efb7cadb1e93bc64fd0db84a01064c79164badb88b9ee8c
title: "SetSelection"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Replaces the ordered selection; duplicates are removed and the final target becomes primary.

**Parameter `targets`:** Registered objects resolved for the current callback.

**Parameter `anchor`:** The range anchor, or null to use the first selected target.

**Exception `T:System.ArgumentNullException`:** The target collection or one member is null.

**Exception `T:System.InvalidOperationException`:** A target has no live identity registration.
