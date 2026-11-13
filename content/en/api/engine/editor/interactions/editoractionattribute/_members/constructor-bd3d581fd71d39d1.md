---
uid: api.bd3d581fd71d39d1f1a6f1298c886bd1b078ed5ffee505dbe6293ca4295025a1
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorActionAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: aa6c42d7fe5d8946ba4b9c8c95fcbce4f04ca050e50d16d0f6da77456091f23d
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates an action registration available from every area.

**Parameter `action`:** The stable semantic action name.

**Parameter `priority`:** The tie-breaking priority used after target specificity.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
