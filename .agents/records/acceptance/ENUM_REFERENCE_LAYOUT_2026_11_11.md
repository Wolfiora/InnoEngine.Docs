# Complete enum value sets

Large enum references now keep their values together under one Values page associated with the containing type and shared contract. Grouping uses the extracted `System.Enum` base type and field kind, not a guessed semantic category or a new API ownership table. Large ordinary types retain complete method/overload families.

## Scope and preservation

| Reference scope | Previous pages | Current pages |
| --- | --- | --- |
| Inno.Core.Input | 101 | 6 |
| Inno.Native.Sdl3 | 3,320 | 2,877 |
| Inno.Native.MiniAudio | 1,446 | 1,410 |

This removes 574 redundant fragments. All six affected enum sets retain exact declarations, signature identities, source links and stable symbol anchors. Retired files were removed only through the generator's hash-checked ownership manifest. An authored edit would block replacement or retirement.

The source facts are unchanged. The complete current projection contains 5,139 pages and all 14,319 bound declarations, with 81 project entries and 171 missing entries. Page count is not a content-completion denominator.

## Local evidence and limits

Thirteen generator regressions passed, including concurrent-independent fixture ownership, authored-edit rejection, XML contracts, exact overload families and the new enum case. The enum fixture verifies every value, signature, explanatory constraint and anchor; regeneration is deterministic and removes only the previous owned fragments. No test scope was weakened.

Canonical source and final rendered projection passed with no errors. The final site built in 150 seconds, including 82.32 seconds for Pagefind; HTML route generation took 37.35 seconds. The preceding build took 129 seconds overall, including 69.25 seconds for Pagefind and 44.48 seconds for route generation. These are single-run observations with other local work during portions of the builds, not a controlled five-sample speedup claim. Fewer pages improve navigation and eliminate duplicate page scaffolding; this evidence does not yet establish lower end-to-end build latency.

[Five interleaved query samples per layout](ENUM_QUERY_2026_11_11.json) retain the SDK, assembly identity, source binding and raw measurements. Exact `KeyCode.A` lookup returns one complete member unit and the same two necessary contract continuations in both layouts. The response is 1,535 bytes. Only one terminal LF separator differs in the member text; declarations, prose, source links and anchors remain identical.

CLI medians including startup were 1,409.859 ms before and 1,731.4295 ms after. The result is not a demonstrated query improvement. The engine query opening path still constructs keyword postings before an exact symbol lookup; removing that unnecessary initialization is a separately verified follow-up. Neither query uses the mutable checkout, SDK graph, engine/native build or network.

The initial measurement assertion compared complete unit bytes and rejected the additional terminal newline. Its ten outputs and script are preserved; the corrected comparison excludes only terminal CR/LF and separately verifies the unchanged necessary relationships. It does not ignore changed contract text.

## Representative browser review

Before this enum regrouping, the committed Plugin installation task was inspected at the browser's actual 883-pixel viewport in light and dark themes. The main document had no horizontal overflow (868-pixel client and scroll widths), displayed the development/source badge, and provided clear headings and task navigation. Website search for `install plugin` returned the installation task first with relevant subsections. Theme was restored afterward.

This is not a complete desktop/mobile/tablet or accessibility matrix. Actual Pages deployment, source execution certification, remote CI, paired publication and the remaining migration are still outstanding.
