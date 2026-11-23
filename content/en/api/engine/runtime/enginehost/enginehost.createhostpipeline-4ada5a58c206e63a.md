---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4ada5a58c206e63a6a69c7342a70c9175c580030ee9cf4a9c81dcf4c9c38126f
symbol: engine:Inno.Runtime:M:Inno.Runtime.EngineHost.CreateHostPipeline(System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.IRuntimeSubsystemFactory},System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeCapabilityID})
title: EngineHost.CreateHostPipeline
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: 6895772ea512461af1983224610da3b72d165b7e246014fc9db6fec9a8324113
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `factories`:** The complete host factory set; session-lifetime factories are rejected.

**Parameter `capabilities`:** Backend-neutral capabilities verified by the application's selected services.

## Returns

A pipeline owned by this EngineHost and borrowed by the application's Shell.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The engine host is disposed.
