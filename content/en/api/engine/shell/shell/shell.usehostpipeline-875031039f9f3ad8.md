---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.875031039f9f3ad8a9a698719611adb1787a21056b494d8c0e3bd8be163c8b32
symbol: engine:Inno.Shell:M:Inno.Shell.Shell.UseHostPipeline(Inno.Runtime.RuntimeSubsystemPipeline)
title: Shell.UseHostPipeline
kind: api
owners:
- Inno.Shell
apiSurface: source-clr
reviewed: 56ad7d6bc3a8a848b56ddb2ca99f0c8a10aede7029299c63a12ddb0ed23f57ec
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `pipeline`:** The started pipeline; its EngineHost remains responsible for retirement.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A host pipeline is already configured.
