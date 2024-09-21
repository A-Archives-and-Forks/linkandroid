import {createQuery, createStdout, listFormatter} from "vue-command";
import {t} from "../../lang";

export const useBasicCommand = ({loading, vueCommand, history, commands}) => {
    const clearCommand = () => {
        history.value = []
        return createQuery()
    }

    const helpCommand = () => {
        const commandList = Object.keys(commands.value)
        return createStdout(listFormatter(t('支持的命令:'), ...commandList))
    }

    return {
        clearCommand,
        helpCommand
    }
}
