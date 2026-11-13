---
uid: api.0973ff2a1261d369f53b7ea15353f09f45cf67cbd95d519f0ea52606a3a21a39
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph\u00601.GetDependents(\u00600,System.Boolean)"
source: xml
reviewed: 1336386dc8b4236b6605c8ae7012f473102c44d84ad0df108259d56859e7a761
title: "GetDependents"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Gets direct or transitive dependents of a node.

**Parameter `node`:** The node to query.

**Parameter `recursive`:** Whether transitive dependents should be included.

**Returns:** A stable dependent snapshot, or an empty list when the node is absent.
