---
uid: api.1b37c5f74bb97e670219d890d8bf248cfba055597783feb916fdafdf668b94d6
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph\u00601.GetDependencies(\u00600,System.Boolean)"
source: xml
reviewed: f8fa82335427d377ba285059217069f0cf03883674fdc07f7f78e42de7cf33ee
title: "GetDependencies"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Gets direct or transitive dependencies of a node.

**Parameter `node`:** The node to query.

**Parameter `recursive`:** Whether transitive dependencies should be included.

**Returns:** A stable dependency snapshot, or an empty list when the node is absent.
