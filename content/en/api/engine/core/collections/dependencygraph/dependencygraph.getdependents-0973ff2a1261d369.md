---
uid: api.0973ff2a1261d369f53b7ea15353f09f45cf67cbd95d519f0ea52606a3a21a39
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph\u00601.GetDependents(\u00600,System.Boolean)"
source: xml
reviewed: 743e10547db945a651e9fb2ae89a780e2dbe13af88ae8e57220adf3280520f00
title: "DependencyGraph\u003CTKey\u003E.GetDependents"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Gets direct or transitive dependents of a node.

## Parameters

**Parameter `node`:** The node to query.

**Parameter `recursive`:** Whether transitive dependents should be included.

## Returns

A stable dependent snapshot, or an empty list when the node is absent.
