---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d0636af324cbfb47e1fba8e1f951afae7a9e079efa13358ee1057a7f51d6e186
symbol: engine:Inno.Editor.Hosting:M:Inno.Editor.Hosting.EditorApplication.RunAsync(Inno.Editor.Hosting.EditorLaunchOptions,System.Threading.CancellationToken)
title: EditorApplication.RunAsync
kind: api
owners:
- Inno.Editor.Hosting
apiSurface: source-clr
sourceFingerprint: 0508138938981ed3371292f8fcd7049348333542495ab29602d0318547a5c91d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `options`:** Borrowed catalogs, factories and product configuration; created resources transfer to the host.

**Parameter `cancellationToken`:** Cancels before creation or requests orderly owner-thread shutdown.

## Returns

Zero after orderly completion; startup, execution and retirement failures propagate.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Options or a required dependency is null.

**Exception `T:System.ArgumentException`:** A required location or product selection is invalid.

**Exception `T:System.NotSupportedException`:** A selected backend lacks its matching runtime or authoring provider.

**Exception `T:System.OperationCanceledException`:** Startup or execution was canceled after resource retirement.

**Exception `T:System.InvalidOperationException`:** Product startup or resource retirement fails.
