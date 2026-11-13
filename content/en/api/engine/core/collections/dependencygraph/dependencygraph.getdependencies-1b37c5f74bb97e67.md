---
uid: api.1b37c5f74bb97e670219d890d8bf248cfba055597783feb916fdafdf668b94d6
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph\u00601.GetDependencies(\u00600,System.Boolean)"
source: xml
reviewed: 27330d90b31db3f9f4d225d45242ac4e9909457c336a0eca64f2c49b9d966fc5
title: "DependencyGraph\u003CTKey\u003E.GetDependencies"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Gets direct or transitive dependencies of a node.

**Parameter `node`:** The node to query.

**Parameter `recursive`:** Whether transitive dependencies should be included.

**Returns:** A stable dependency snapshot, or an empty list when the node is absent.
