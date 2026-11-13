---
uid: api.6cb9929b37c52ca6f9a2854e3b31bac1c613ecfad528e7472843d0d4b2f5ed5c
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorEditGesture.Commit"
source: xml
reviewed: 416db564e7007669873ff89d0df36859406377ff0d2f511b0111ee9fd92046f6
title: "Commit"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Commits the edit exactly once; rejected completion leaves the transaction available for retry.

**Exception `T:System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.
