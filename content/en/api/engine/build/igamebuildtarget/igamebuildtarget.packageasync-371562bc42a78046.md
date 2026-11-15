---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.371562bc42a78046f81c107c593bdf80e53f59a7614f9f946b7f4cca5f9ff04a
symbol: engine:Inno.Build:M:Inno.Build.IGameBuildTarget.PackageAsync(Inno.Build.GameBuildPackageContext,System.Threading.CancellationToken)
title: IGameBuildTarget.PackageAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: 9444d9f51306496167472e834f83d7ad8ceb1ecd30de16c072fa9c8f2fa82ad8

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `context`:** The isolated package context owned by the current build.

**Parameter `cancellationToken`:** The token that cancels work before the build is committed.

## Returns

The single platform output path created beneath `P:Inno.Build.GameBuildPackageContext.outputDirectory`.

## Exceptions

**Exception `T:System.OperationCanceledException`:** Thrown when packaging is canceled.
