---
uid: api.bd3d581fd71d39d1f1a6f1298c886bd1b078ed5ffee505dbe6293ca4295025a1
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorActionAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: ea6109682bb1cbdd843870ce124db0a176d6dea15a8480b57e6d3a9bd9e8449a
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates an action registration available from every area.

**Parameter `action`:** The stable semantic action name.

**Parameter `priority`:** The tie-breaking priority used after target specificity.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
