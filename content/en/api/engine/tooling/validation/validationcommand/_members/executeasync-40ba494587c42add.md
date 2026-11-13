---
uid: api.40ba494587c42add8c6f3488b71a3dc1c29d81990ca81e188ba35a89fb7bef42
symbol: "engine:Inno.Tooling.Validation:M:Inno.Tooling.Validation.ValidationCommand.ExecuteAsync(System.String[],System.Threading.CancellationToken)"
source: xml
reviewed: 90184ef44c6f1a85cba1df94b70a6db02e2ed959707da15a46dd748c5fec831e
title: "ExecuteAsync"
kind: api
owners: [Inno.Tooling.Validation]
apiSurface: source-clr
---

Executes an explicit plan, run, full or evidence operation and persists inspectable results.

**Parameter `arguments`:** The operation followed by explicit engine-root, base, dotnet, configuration, artifacts-path, output, plan, evidence, full, extended, cache-input or cache-output options. Cache archives contain immutable native payloads only. Explicit docs-cache-root and docs-snapshot options select protected external documentation facts. Optional docs-base-snapshot identifies changed pages and facts without rescanning an authoring checkout.

**Parameter `cancellationToken`:** Cancels child processes while retaining the first failure and completed diagnostics.

**Returns:** Zero when the requested operation succeeds, one for unsuccessful execution, or two when planning requires explicitly prepared inputs. A blocked preparation report is written to preparation.json instead of producing a new executable plan. The command never fetches native source inputs automatically.

**Exception `T:System.ArgumentException`:** An operation or option is unknown, duplicated or missing its value.

**Exception `T:System.OperationCanceledException`:** The caller cancels validation.

**Exception `T:System.IO.InvalidDataException`:** A supplied plan or evidence record is invalid or does not describe the current input.
