---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bd73b4d87fea3db605ef473ff9df1353096571b9c850598190803acb5985951c
symbol: engine:Inno.Adapter.Input:M:Inno.Adapter.Input.EventInputSource.ProcessEvent(Inno.Core.Events.Event)
title: EventInputSource.ProcessEvent
kind: api
owners:
- Inno.Adapter.Input
apiSurface: source-clr
reviewed: 34a961d358e3eeea01a63cd86f74188900a26ef35f90347032df9941dcbd4471
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `evnt`:** The backend-neutral event produced by a platform adapter.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `evnt` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown after this source has been disposed.
