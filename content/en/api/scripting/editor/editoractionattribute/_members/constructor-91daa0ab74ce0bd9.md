---
uid: api.91daa0ab74ce0bd96e670b8be90a37a98746f85ffec941eed257bf0a95af079a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorActionAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: 7b1c627c28f83cf0f08231fef6a6df24bd530e85250a5ab1857c2e304a921e51
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates an action registration available from every area.

**Parameter `action`:** The stable semantic action name.

**Parameter `priority`:** The tie-breaking priority used after target specificity.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
