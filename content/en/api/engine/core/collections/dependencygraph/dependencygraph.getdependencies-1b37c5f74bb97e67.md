---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1b37c5f74bb97e670219d890d8bf248cfba055597783feb916fdafdf668b94d6
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph`1.GetDependencies(`0,System.Boolean)
title: DependencyGraph<TKey>.GetDependencies
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
sourceFingerprint: a56a5581cd68a0f88209200e89ed68b9bb558e9e771f0b4f7b43100c34b51109
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `node`:** The node to query.

**Parameter `recursive`:** Whether transitive dependencies should be included.

## Returns

A stable dependency snapshot, or an empty list when the node is absent.
