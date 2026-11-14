---
uid: api.a81a011c9d1cca51f94212fd97f845b685f7ffe05115b6c9b15551555cfe066f
symbol: "engine:Inno.Scene:M:Inno.Scene.GameObject.RemoveComponent(Inno.Scene.GameComponent)"
source: xml
reviewed: b0e241a5cfb7123d2e8c94a7475e75c490251ab1026d304c22dbfdf66616c0af
title: "GameObject.RemoveComponent"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Removes and destroys a specific attached component.

## Parameters

**Parameter `component`:** GameComponent instance to remove.

## Returns

`true` when the component was attached and removed.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when attempting to remove the mandatory transform.
