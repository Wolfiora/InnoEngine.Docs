---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3612688301e1cbd1dce06dac255d25fe3b7647a0c3f7f5797a378c3226563063
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.OnActivating(`0,`0)
title: TypeRegistry<TSnapshot>.OnActivating
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 7b1c6ccaf0eab1090a2decfeae4119e89388843c2a74c73c9bae55a883d08bec
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `previous`:** The previous active snapshot, or `null` during initial activation.

**Parameter `candidate`:** The candidate exposed through ``P:Inno.Extensibility.Types.TypeRegistry`1.current`` during this callback.

## Remarks

Implementations may perform fallible lifecycle work here. They must keep enough local state for ``M:Inno.Extensibility.Types.TypeRegistry`1.OnActivationRolledBack(`0,`0)`` to reverse every completed step.
