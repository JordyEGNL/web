import {
    APP_INITIALIZER,
    LOCALE_ID,
    NgModule,
} from '@angular/core';

import { ToasterModule } from 'angular2-toaster';

import { BroadcasterMessagingService } from '../../services/broadcasterMessaging.service';
import { HtmlStorageService } from '../../services/htmlStorage.service';
import { I18nService } from '../../services/i18n.service';
import { MemoryStorageService } from '../../services/memoryStorage.service';
import { PasswordRepromptService } from '../../services/passwordReprompt.service';
import { WebPlatformUtilsService } from '../../services/webPlatformUtils.service';

import { EventService } from './event.service';
import { OrganizationGuardService } from './organization-guard.service';
import { OrganizationTypeGuardService } from './organization-type-guard.service';
import { PolicyListService } from './policy-list.service';
import { RouterService } from './router.service';

import { AuthGuardService } from 'jslib-angular/services/auth-guard.service';
import { BroadcasterService } from 'jslib-angular/services/broadcaster.service';
import { LockGuardService } from 'jslib-angular/services/lock-guard.service';
import { ModalService as ModalServiceAbstraction } from 'jslib-angular/services/modal.service';
import { UnauthGuardService } from 'jslib-angular/services/unauth-guard.service';
import { ValidationService } from 'jslib-angular/services/validation.service';

import { AccountsManagementService } from 'jslib-common/services/accountsManagement.service';
import { ActiveAccountService } from 'jslib-common/services/activeAccount.service';
import { ApiService } from 'jslib-common/services/api.service';
import { AppIdService } from 'jslib-common/services/appId.service';
import { AuditService } from 'jslib-common/services/audit.service';
import { AuthService } from 'jslib-common/services/auth.service';
import { CipherService } from 'jslib-common/services/cipher.service';
import { CollectionService } from 'jslib-common/services/collection.service';
import { ConsoleLogService } from 'jslib-common/services/consoleLog.service';
import { ContainerService } from 'jslib-common/services/container.service';
import { CryptoService } from 'jslib-common/services/crypto.service';
import { EnvironmentService } from 'jslib-common/services/environment.service';
import { EventService as EventLoggingService } from 'jslib-common/services/event.service';
import { ExportService } from 'jslib-common/services/export.service';
import { FileUploadService } from 'jslib-common/services/fileUpload.service';
import { FolderService } from 'jslib-common/services/folder.service';
import { ImportService } from 'jslib-common/services/import.service';
import { NotificationsService } from 'jslib-common/services/notifications.service';
import { OrganizationService } from 'jslib-common/services/organization.service';
import { PasswordGenerationService } from 'jslib-common/services/passwordGeneration.service';
import { PolicyService } from 'jslib-common/services/policy.service';
import { ProviderService } from 'jslib-common/services/provider.service';
import { SearchService } from 'jslib-common/services/search.service';
import { SendService } from 'jslib-common/services/send.service';
import { SettingsService } from 'jslib-common/services/settings.service';
import { StateService } from 'jslib-common/services/state.service';
import { StoreService } from 'jslib-common/services/store.service';
import { SyncService } from 'jslib-common/services/sync.service';
import { TokenService } from 'jslib-common/services/token.service';
import { TotpService } from 'jslib-common/services/totp.service';
import { VaultTimeoutService } from 'jslib-common/services/vaultTimeout.service';
import { WebCryptoFunctionService } from 'jslib-common/services/webCryptoFunction.service';

import { AccountsManagementService as AccountsManagementServiceAbstraction } from 'jslib-common/abstractions/accountsManagement.service';
import { ActiveAccountService as ActiveAccountServiceAbstraction } from 'jslib-common/abstractions/activeAccount.service';
import { ApiService as ApiServiceAbstraction } from 'jslib-common/abstractions/api.service';
import { AuditService as AuditServiceAbstraction } from 'jslib-common/abstractions/audit.service';
import { AuthService as AuthServiceAbstraction } from 'jslib-common/abstractions/auth.service';
import { CipherService as CipherServiceAbstraction } from 'jslib-common/abstractions/cipher.service';
import { CollectionService as CollectionServiceAbstraction } from 'jslib-common/abstractions/collection.service';
import { CryptoService as CryptoServiceAbstraction } from 'jslib-common/abstractions/crypto.service';
import { CryptoFunctionService as CryptoFunctionServiceAbstraction } from 'jslib-common/abstractions/cryptoFunction.service';
import { EnvironmentService as EnvironmentServiceAbstraction, Urls } from 'jslib-common/abstractions/environment.service';
import { EventService as EventLoggingServiceAbstraction } from 'jslib-common/abstractions/event.service';
import { ExportService as ExportServiceAbstraction } from 'jslib-common/abstractions/export.service';
import { FileUploadService as FileUploadServiceAbstraction }  from 'jslib-common/abstractions/fileUpload.service';
import { FolderService as FolderServiceAbstraction } from 'jslib-common/abstractions/folder.service';
import { I18nService as I18nServiceAbstraction } from 'jslib-common/abstractions/i18n.service';
import { ImportService as ImportServiceAbstraction } from 'jslib-common/abstractions/import.service';
import { LogService } from 'jslib-common/abstractions/log.service';
import { MessagingService as MessagingServiceAbstraction } from 'jslib-common/abstractions/messaging.service';
import { NotificationsService as NotificationsServiceAbstraction } from 'jslib-common/abstractions/notifications.service';
import { OrganizationService as OrganizationServiceAbstraction } from 'jslib-common/abstractions/organization.service';
import {
    PasswordGenerationService as PasswordGenerationServiceAbstraction,
} from 'jslib-common/abstractions/passwordGeneration.service';
import { PasswordRepromptService as PasswordRepromptServiceAbstraction } from 'jslib-common/abstractions/passwordReprompt.service';
import { PlatformUtilsService as PlatformUtilsServiceAbstraction } from 'jslib-common/abstractions/platformUtils.service';
import { PolicyService as PolicyServiceAbstraction } from 'jslib-common/abstractions/policy.service';
import { ProviderService as ProviderServiceAbstraction } from 'jslib-common/abstractions/provider.service';
import { SearchService as SearchServiceAbstraction } from 'jslib-common/abstractions/search.service';
import { SendService as SendServiceAbstraction } from 'jslib-common/abstractions/send.service';
import { SettingsService as SettingsServiceAbstraction } from 'jslib-common/abstractions/settings.service';
import { StateService as StateServiceAbstraction } from 'jslib-common/abstractions/state.service';
import { StorageService as StorageServiceAbstraction } from 'jslib-common/abstractions/storage.service';
import { SyncService as SyncServiceAbstraction } from 'jslib-common/abstractions/sync.service';
import { TokenService as TokenServiceAbstraction } from 'jslib-common/abstractions/token.service';
import { TotpService as TotpServiceAbstraction } from 'jslib-common/abstractions/totp.service';
import { VaultTimeoutService as VaultTimeoutServiceAbstraction } from 'jslib-common/abstractions/vaultTimeout.service';
import { ModalService } from './modal.service';

import { StorageKey } from 'jslib-common/enums/storageKey';
import { ThemeType } from 'jslib-common/enums/themeType';

const i18nService = new I18nService(window.navigator.language, 'locales');
const stateService = new StateService();
const broadcasterService = new BroadcasterService();
const messagingService = new BroadcasterMessagingService(broadcasterService);
const consoleLogService = new ConsoleLogService(false);
const platformUtilsService = new WebPlatformUtilsService(i18nService, messagingService, consoleLogService, () => storageService);
const storageService: StorageServiceAbstraction = new HtmlStorageService(platformUtilsService);
const secureStorageService: StorageServiceAbstraction = new MemoryStorageService();
const accountsManagementService: AccountsManagementServiceAbstraction = new AccountsManagementService(storageService, secureStorageService);
const storeService = new StoreService(storageService, platformUtilsService.isDev() ? storageService : secureStorageService);
const activeAccount: ActiveAccountServiceAbstraction = new ActiveAccountService(accountsManagementService, storeService);
const organizationService: OrganizationServiceAbstraction = new OrganizationService(activeAccount);
const providerService: ProviderServiceAbstraction = new ProviderService(activeAccount);
const cryptoFunctionService: CryptoFunctionServiceAbstraction = new WebCryptoFunctionService(window,
    platformUtilsService);
const cryptoService = new CryptoService(cryptoFunctionService, platformUtilsService,
    consoleLogService, activeAccount);
const tokenService = new TokenService(activeAccount);
const appIdService = new AppIdService(storageService);
const environmentService = new EnvironmentService(activeAccount);
const apiService = new ApiService(tokenService, platformUtilsService, environmentService,
    async (expired: boolean) => messagingService.send('logout', { expired: expired }));
const settingsService = new SettingsService(activeAccount);
export let searchService: SearchService = null;
const fileUploadService = new FileUploadService(consoleLogService, apiService);
const cipherService = new CipherService(cryptoService, settingsService,
    apiService, fileUploadService, i18nService, () => searchService, activeAccount);
const folderService = new FolderService(cryptoService, apiService,
    i18nService, cipherService, activeAccount);
const collectionService = new CollectionService(cryptoService, i18nService, activeAccount);
searchService = new SearchService(cipherService, consoleLogService, i18nService);
const policyService = new PolicyService(activeAccount, organizationService);
const sendService = new SendService(cryptoService, apiService, fileUploadService,
    i18nService, cryptoFunctionService, activeAccount);
const vaultTimeoutService = new VaultTimeoutService(cipherService, folderService, collectionService,
    cryptoService, platformUtilsService, messagingService, searchService, tokenService,
    policyService, activeAccount, async () => messagingService.send('logout', { expired: false }));
const syncService = new SyncService(apiService, settingsService,
    folderService, cipherService, cryptoService, collectionService, messagingService, policyService,
    sendService, async (expired: boolean) => messagingService.send('logout', { expired: expired }),
    activeAccount, organizationService, providerService);
const passwordGenerationService = new PasswordGenerationService(cryptoService, policyService, activeAccount);
const totpService = new TotpService(cryptoFunctionService, activeAccount);
const containerService = new ContainerService(cryptoService);
const authService = new AuthService(cryptoService, apiService,
    tokenService, appIdService, i18nService, platformUtilsService, messagingService, vaultTimeoutService,
    consoleLogService, activeAccount, accountsManagementService);
const exportService = new ExportService(folderService, cipherService, apiService, cryptoService);
const importService = new ImportService(cipherService, folderService, apiService, i18nService, collectionService,
    platformUtilsService, cryptoService);
const notificationsService = new NotificationsService(syncService, appIdService, apiService, vaultTimeoutService,
    environmentService, async () => messagingService.send('logout', { expired: true }), consoleLogService,
    activeAccount);
const auditService = new AuditService(cryptoFunctionService, apiService);
const eventLoggingService = new EventLoggingService(apiService, cipherService,
    activeAccount, organizationService);

containerService.attachToWindow(window);

export function initFactory(): Function {
    return async () => {
        await (storageService as HtmlStorageService).init();

        const urls = process.env.URLS as Urls;
        urls.base ??= window.location.origin;
        environmentService.setUrls(urls, false);

        setTimeout(() => notificationsService.init(), 3000);

        vaultTimeoutService.init(true);
        const locale = await activeAccount.getInformation<string>(StorageKey.Locale);
        await i18nService.init(locale);
        eventLoggingService.init(true);
        authService.init();
        const htmlEl = window.document.documentElement;
        htmlEl.classList.add('locale_' + i18nService.translationLocale);

        // Initial theme is set in index.html which must be updated if there are any changes to theming logic
        platformUtilsService.onDefaultSystemThemeChange(async sysTheme => {
            const bwTheme = await activeAccount.getInformation<ThemeType>(StorageKey.Theme);
            if (bwTheme === ThemeType.System) {
                htmlEl.classList.remove('theme_' + ThemeType.Light, 'theme_' + ThemeType.Dark);
                htmlEl.classList.add('theme_' + sysTheme);
            }
        });

        stateService.save(StorageKey.DisableFavicon,
            await storageService.get<boolean>(StorageKey.DisableFavicon));
        stateService.save('enableGravatars', await storageService.get<boolean>('enableGravatars'));
    };
}

@NgModule({
    imports: [
        ToasterModule,
    ],
    declarations: [],
    providers: [
        ValidationService,
        AuthGuardService,
        OrganizationGuardService,
        OrganizationTypeGuardService,
        UnauthGuardService,
        RouterService,
        EventService,
        LockGuardService,
        PolicyListService,
        { provide: ModalServiceAbstraction, useClass: ModalService },
        { provide: AuditServiceAbstraction, useValue: auditService },
        { provide: AuthServiceAbstraction, useValue: authService },
        { provide: CipherServiceAbstraction, useValue: cipherService },
        { provide: FolderServiceAbstraction, useValue: folderService },
        { provide: LogService, useValue: consoleLogService },
        { provide: CollectionServiceAbstraction, useValue: collectionService },
        { provide: EnvironmentServiceAbstraction, useValue: environmentService },
        { provide: TotpServiceAbstraction, useValue: totpService },
        { provide: TokenServiceAbstraction, useValue: tokenService },
        { provide: I18nServiceAbstraction, useValue: i18nService },
        { provide: CryptoServiceAbstraction, useValue: cryptoService },
        { provide: PlatformUtilsServiceAbstraction, useValue: platformUtilsService },
        { provide: PasswordGenerationServiceAbstraction, useValue: passwordGenerationService },
        { provide: ApiServiceAbstraction, useValue: apiService },
        { provide: FileUploadServiceAbstraction, useValue: fileUploadService },
        { provide: SyncServiceAbstraction, useValue: syncService },
        { provide: MessagingServiceAbstraction, useValue: messagingService },
        { provide: BroadcasterService, useValue: broadcasterService },
        { provide: SettingsServiceAbstraction, useValue: settingsService },
        { provide: VaultTimeoutServiceAbstraction, useValue: vaultTimeoutService },
        { provide: StorageServiceAbstraction, useValue: storageService },
        { provide: StateServiceAbstraction, useValue: stateService },
        { provide: ExportServiceAbstraction, useValue: exportService },
        { provide: SearchServiceAbstraction, useValue: searchService },
        { provide: ImportServiceAbstraction, useValue: importService },
        { provide: NotificationsServiceAbstraction, useValue: notificationsService },
        { provide: CryptoFunctionServiceAbstraction, useValue: cryptoFunctionService },
        { provide: EventLoggingServiceAbstraction, useValue: eventLoggingService },
        { provide: PolicyServiceAbstraction, useValue: policyService },
        { provide: SendServiceAbstraction, useValue: sendService },
        { provide: PasswordRepromptServiceAbstraction, useClass: PasswordRepromptService },
        { provide: LogService, useValue: consoleLogService },
        { provide: AccountsManagementServiceAbstraction, useValue: accountsManagementService },
        { provide: ActiveAccountServiceAbstraction, useValue: activeAccount },
        { provide: OrganizationServiceAbstraction, useValue: organizationService },
        { provide: ProviderServiceAbstraction, useValue: providerService },
        {
            provide: APP_INITIALIZER,
            useFactory: initFactory,
            deps: [],
            multi: true,
        },
        {
            provide: LOCALE_ID,
            useFactory: () => i18nService.translationLocale,
            deps: [],
        },
    ],
})
export class ServicesModule {
}
