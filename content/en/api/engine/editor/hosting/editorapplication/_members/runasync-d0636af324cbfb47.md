---
uid: api.d0636af324cbfb47e1fba8e1f951afae7a9e079efa13358ee1057a7f51d6e186
symbol: "engine:Inno.Editor.Hosting:M:Inno.Editor.Hosting.EditorApplication.RunAsync(Inno.Editor.Hosting.EditorLaunchOptions,System.Threading.CancellationToken)"
source: xml
reviewed: 687e509470f0cfc89bf6f205beb1c02093494e498b20f092309ca0b0cdc99f79
title: "RunAsync"
kind: api
owners: [Inno.Editor.Hosting]
apiSurface: source-clr
---

Validates composition, owns the created Editor host and retires resources on exit, cancellation or failure.

**Parameter `options`:** Borrowed catalogs, factories and product configuration; created resources transfer to the host.

**Parameter `cancellationToken`:** Cancels before creation or requests orderly owner-thread shutdown.

**Returns:** Zero after orderly completion; startup, execution and retirement failures propagate.

**Exception `T:System.ArgumentNullException`:** Options or a required dependency is null.

**Exception `T:System.ArgumentException`:** A required location or product selection is invalid.

**Exception `T:System.NotSupportedException`:** A selected backend lacks its matching runtime or authoring provider.

**Exception `T:System.OperationCanceledException`:** Startup or execution was canceled after resource retirement.

**Exception `T:System.InvalidOperationException`:** Product startup or resource retirement fails.
