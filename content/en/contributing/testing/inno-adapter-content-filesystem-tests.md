---
title: Filesystem content-cache tests
description: Verify complete generations, cross-process readers and failure-safe publication.
uid: project.inno-adapter-content-filesystem-tests
kind: project
owners:
  - Inno.Adapter.Content.FileSystem.Tests
---
# Filesystem content-cache tests

`Inno.Adapter.Content.FileSystem.Tests` checks the physical cache behind [deployment content reads](../../manual/assets/read-content-pack.md). It exercises real files and processes while preserving the content service's independently retained readers.

## Publication and integrity

Concurrent preparation publishes one complete generation. Prior cancellation creates no cache directory; cancellation during copy discards the candidate and preserves the previous pointer. Source failure removes incomplete staging without replacing the last published content.

Complete validation repairs corrupt caches. A content change after preparation fails the read and releases its failed stream pin. A valid hit preserves the generation and avoids rereading source payloads.

## Readers, waiting and retirement

Independent processes publish one generation and pin it until both readers retire. Repair retains an older generation until its last stream closes. A writer lease bounds waiting and supports cancellation without mutating protected content.

Unknown ownership of an old generation is reported after the new content commits; it is not permission to delete the unknown owner or pretend the committed publication rolled back.

## Run and maintain

Use [the validation plan](../validate-change.md). A focused filesystem diagnostic is:

```powershell
dotnet test backends/FileSystem/tests/Inno.Adapter.Content.FileSystem.Tests/Inno.Adapter.Content.FileSystem.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

The contract suite requires actual filesystem and child-process facilities. Fixtures own their temporary roots and release stream pins before cleanup. A cache pass is not platform packaging or device execution evidence.

[Browse the pinned cache assertions](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/backends/FileSystem/tests/Inno.Adapter.Content.FileSystem.Tests).
