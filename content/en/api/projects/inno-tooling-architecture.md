---
title: Inno.Tooling.Architecture
description: Source, project, compiled-boundary and documentation validation for engine contributors.
uid: project.inno-tooling-architecture
kind: project
owners:
  - Inno.Tooling.Architecture
---
# Inno.Tooling.Architecture

This tooling library checks repository structure, dependency direction, source ownership and public contracts. The Build entry calls it through `verify`; normal development uses the unified validation plan to select the required evidence. Its declarations and API extraction are separate from running an engine product.

## Choose the evidence you need

| Check | Establishes | Does not establish |
| --- | --- | --- |
| Source checks | Syntax-based conventions, XML presence and known ownership patterns. | Complete compiled semantics or runtime behavior. |
| SDK graph checks | Actual imported project/item relationships and target selections. | Successful compilation, packaging or device operation. |
| Compiled metadata | Public/protected boundary types in the selected current outputs. | Dynamic plugin behavior or arbitrary threading correctness. |
| Documentation structure | Page ownership, navigation, links and content boundaries. | Compilable examples or correct prose semantics. |
| API/example checks | Selected declarations and explicitly prepared example contexts. | Every platform or a complete source execution certificate. |

`--source-only` runs the inexpensive repository-wide source obligations. `--metadata-only` with repeated `--api-project` selects compiled owners and requires their build evidence. XML structure is checked from source; inherited contracts and type-dependent rules require the selected SDK compilation model. A clean source check must not borrow stale binaries.

```sh
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- verify . --source-only
```

`ArchitectureValidator.Execute` returns zero when its selected checks pass and one for violations. Missing repository roots, invalid options and cancellation have explicit exception contracts. Configuration selection accepts Debug, SourceDebug and Release.

## Source and ownership rules

The validator shares parsed C# trees within one source-check invocation. It checks hand-authored multi-parameter declarations, explicit usings, XML contracts, known retired compatibility mechanisms, forbidden test reflection and dependency directions. Trees are released after that invocation; a subsequent semantic check uses its own actual SDK model.

Retirement checks reject direct catches of retirement-pending/timeout exception types. Cleanup inspects the full exception tree through the Core retirement contract and preserves pending retirement. Registry implementations cannot replace propagation with a direct `OnCleanupFailed` call. These checks recognize declared syntax patterns; they do not prove arbitrary aliasing, native callbacks or dynamic exception behavior.

Editor-specific checks cover duplicate aliases/XML summaries and loop-local ImGui ID cleanup. A `finally` must preserve pairing on normal completion, exceptions and `break`. Other Begin/End or Push/Pop protocols still require ownership review and appropriate Native tests.

Project checks enforce solution membership and the actual component/platform owner, distinguish fixture projects from products, restrict entry executables to Editor and Build, and reject reverse dependencies into entry. Domain-test transitive dependencies must not enter binding generation or Native product preparation. Filtering tests at runtime cannot establish that isolation.

Audio has its own neutral dependency boundary. Native MiniAudio bindings belong to the adapter/toolchain/native owners and their tests; real-time adapter code must not retain extension-generation or reflection objects. Script manifests cannot export device/backend/native machinery as a neutral audio API.

## Evaluate the real SDK graph

`--dotnet` supplies the selected SDK executable. Read-only item/property inspection observes imported references, Compile items, assembly identities and product/Native targets without executing Restore, Build, Native or generation targets. Reference resolution for semantic checks uses design-time SDK operations and may update its normal reference cache; required outputs must already exist.

The graph is captured in one SDK process. `--project-graph` records that evaluated diagnostic model. `--sdk-snapshot` consumes a supplied graph only in a caller-controlled boundary with matching configuration and input identities; the validator checks the expected project set. A saved graph is not independently proof that mutable inputs stayed unchanged.

`--artifacts-path` requires explicit `--dotnet`. SDK TargetPath, ReferencePath, Compile items, language settings and conditional symbols all follow that output selection. Do not copy DLLs back to a default bin directory to satisfy a check. Selected owners retain their real signature dependencies even when those dependencies are not themselves selected for review.

If `docs export-api` cannot open an evaluated compilation, its error includes the collected prerequisite diagnostic, such as the exact missing target/configuration reference. Prepare that declared input before retrying. A missing macOS or Browser target reference is not repaired by substituting an unrelated desktop DLL, and failed extraction does not publish a successful fact manifest.

SDK failure, missing references and cancellation remain failures. Child-process cancellation drains owned processes before returning. Graph inspection does not substitute for compilation or execution on the relevant platform.

## Inspect public boundaries

Roslyn follows public/protected bases, interfaces, parameters, returns and constraints through nested generics, arrays, tuples, pointers and unmanaged function pointers. Effective visibility includes enclosing types; a public member in an internal container does not become external API. Private-protected members do not create an external extension surface.

Editor references used by public signatures must remain public compile dependencies. Implementation-only references use `PrivateAssets="compile"`. The source reference groups separate implementation and public dependencies in the required order. Runtime loading alone cannot decide whether a reference belongs in the public compile surface.

Current-host products use current compiled metadata. Foreign product combinations may use an explicit source-signature audit where no matching host SDK output exists. Unresolved types fail. That source audit neither runs generators nor proves unused public references after generation; complete generated boundaries still need the owning platform build.

Host/Shell signatures cannot expose concrete adapters. Native leakage checks cover their implemented BGFX, SDL3 and MiniAudio rules. ImGui presentation has additional specialized checks; this does not claim a universal proof for all foreign types.

BGCS/Cpp2C profiles explicitly separate target-owned managed/C++ output directories. Neither output may contain another target's output, because atomic replacement must not remove another publisher's files.

## Documentation source facts and examples

`DocumentationReferences.ExportProjects` derives project identity from the repository inventory. It does not invent API surfaces from names. `ExportApi` uses the existing evaluated source extractor for explicit owners, preserving configuration, conditional compilation, actual references and public/protected contracts. Existing bindings can participate in resolution; generated products still require their own build acceptance.

`ValidateApi` compares selected manifests against one fresh SDK batch for their shared configuration/target. It checks complete symbol membership, XML, declarations, constants and type relationships, while ignoring source line offsets. It does not build products or turn matching facts into a publication certificate. See [source-reference comparison](../../contributing/reference-validation.md) for input, failure and evidence boundaries.

Exports publish atomically only after required discovery and extraction succeed. Their `Unverified` source status distinguishes complete extracted facts from behavioral certification. A failed extraction or a partial diagnostic inventory cannot certify the repository.

`DocumentationExamples.ExecuteAsync` consumes canonical blocks from the separate documentation library. It does not parse Markdown again, build a product or execute the examples. Host groups use the actual SDK reference closure; runtime/editor-script groups require their real compiler-generated projected references and framework assemblies. The validator freezes reference bytes and records hashes. Missing context, references or required example discovery is blocked, not passed. Independent available groups can continue after another group fails.

See [example validation](../../contributing/example-validation.md) and [local query contracts](../../contributing/documentation-queries.md). Queries belong to `Inno.Tooling.Documentation` and never trigger this validation automatically.

## Existing engine Wiki checks

The selected source revision also exposes engine-tree Wiki checks. `--documentation-only` checks structure and links; `--wiki-contracts-only` checks selected API/examples and requires structure evidence. `--wiki --wiki-only` combines those Wiki responsibilities without repeating source and metadata checks. Page selection limits expensive contracts, not repository-wide structural coverage.

Full architecture validation with selected Wiki pages still needs its full architecture reference set. An isolated Wiki operation may prepare only selected owners and their dependencies. These contexts cannot share an incorrectly narrowed graph.

`--wiki-target` limits product compilation to an explicit target while retaining shared checks. Other products are reported as not evaluated rather than borrowing host DLLs. Omitting it requires all necessary real references. Windows/macOS success does not certify Browser or other devices.

The optional `--expand-xml` maintenance operation expands existing XML formatting only. It does not invent semantics or inherited prose, and normal CI does not request source writes. Engine development requirements remain authoritative in its rulebook.

## API reference

The reference describes the exact selected tool revision, including source exports, example validation and the architecture entry. Missing environments remain visible prerequisites; a zero exit code applies only to the checks actually selected.

[Browse architecture tooling types](../types/tooling-architecture/index.md).
