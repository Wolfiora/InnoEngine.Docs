---
uid: api.91daa0ab74ce0bd96e670b8be90a37a98746f85ffec941eed257bf0a95af079a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorActionAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: 9016fd0e99c47d62d5092ddce395814e518d1b7fd18c64cb296fb7cfd2f274f3
title: "EditorActionAttribute.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates an action registration available from every area.

## Parameters

**Parameter `action`:** The stable semantic action name.

**Parameter `priority`:** The tie-breaking priority used after target specificity.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
